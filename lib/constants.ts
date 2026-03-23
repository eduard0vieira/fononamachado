export const WHATSAPP_NUMBER = '5515996661683'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`
export const WHATSAPP_AGENDAMENTO_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%20Nath%C3%A1lia!%20Gostaria%20de%20agendar%20uma%20consulta.`

export const INSTAGRAM_URL = 'https://www.instagram.com/fononamachado'
export const INSTAGRAM_HANDLE = '@fononamachado'

export const MAPS_URL =
  'https://www.google.com/maps/place/Nath%C3%A1lia+Machado+-+Fonoaudi%C3%B3loga/@-23.8787241,-47.9948579,17z/'

export const MAPS_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.5!2d-47.9948579!3d-23.8787241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5af83e8bac7ef%3A0xb28f528471b04b1d!2sNath%C3%A1lia%20Machado%20-%20Fonoaudi%C3%B3loga!5e0!3m2!1spt!2sbr!4v1'

export const EMAIL = 'fononamachado@gmail.com'
export const PHONE_DISPLAY = '(15) 99666-1683'
export const ADDRESS = 'R. Miguel Terra, 385 — Centro\nSão Miguel Arcanjo — SP'
export const CRFA = 'CRFa 2-23700'

export const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbyaSkeeU-IQqMcm6YiHjUgJDv2_OuoVyi3yYHiZ8p8PpTJJTb2WTNGL7qPSzFI0s4Pd/exec'

export const VIACEP_URL = (cep: string) =>
  `https://viacep.com.br/ws/${cep.replace(/\D/g, '')}/json/`
