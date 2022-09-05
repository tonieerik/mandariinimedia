import sgMail from "@sendgrid/mail"

function htmlEntities(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

export default function formHandler(req, res) {
  if (!req.body.email) {
    return res.status(422).json("Email is required")
  }

  if (!req.body.message) {
    return res.status(422).json("Message is required")
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: "toni.leppanen@gmail.com", //"nelli@mandariinimedia.fi",
    from: "Mandariinimedia <nelli@mandariinimedia.fi>", // Verified sender
    reply_to: htmlEntities(req.body.email),
    subject: "Mandariinimedia: viesti verkkosivuilta",
    text: `Nimi: ${htmlEntities(req.body.name)}, Sähköposti: ${htmlEntities(
      req.body.email
    )}, Puhelin: ${htmlEntities(req.body.phone)}, Viesti: ${htmlEntities(
      req.body.message
    )}`,
    html: `<strong>Nimi:</strong> ${htmlEntities(
      req.body.name
    )}<br /><strong>Sähköposti:</strong> ${htmlEntities(
      req.body.email
    )}<br /><strong>Puhelin:</strong> ${htmlEntities(
      req.body.phone
    )}<br /><strong>Viesti:</strong><br />${htmlEntities(req.body.message)}`,
  }

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent")
    })
    .catch(error => {
      console.error(error)
    })

  return res.json(`OK`)
}
