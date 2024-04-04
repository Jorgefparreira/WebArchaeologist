export const ContactBanner = props => {

  let bannerType = {
    'sent': {
      'message': <div><p>Thank you for you message.</p>
        <p>I will be in contact shortly.</p></div>,
      'colour': 'success'
    },
    'missingFields': {
      'message': <div><p>Please fill all the required fields</p></div>,
      'colour': 'danger'
    },
    'errorSending': {
      'message': <div><p>There was an error sending your message. Please try again later.</p></div>,
      'colour': 'danger'
    },
    'sending': {
      'message': <div><p><strong>Sending<i id="sending-dots"></i> </strong></p></div>,
      'colour': 'warning'
    }
  }

  return <div
    className={`alert alert-${bannerType[props.type]?.colour} fade show ${props.type ? 'show-message' : ''}`}
    role="alert"
  >
    {bannerType[props.type]?.message}
  </div>
}