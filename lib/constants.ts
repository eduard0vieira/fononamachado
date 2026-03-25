export const WHATSAPP_NUMBER = "5515996661683";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const WHATSAPP_AGENDAMENTO_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%20Nath%C3%A1lia!%20Gostaria%20de%20agendar%20uma%20consulta.`;

export const INSTAGRAM_URL = "https://www.instagram.com/fononamachado";
export const INSTAGRAM_HANDLE = "@fononamachado";

/** Crédito no rodapé — desenvolvedor */
export const DEVELOPER_INSTAGRAM_URL =
  "https://www.instagram.com/eduard0vieira";

export const MAPS_URL = "https://maps.app.goo.gl/VR8cpWSdMjEnzdDD7";

export const MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4004.5876547636517!2d-47.99495039999999!3d-23.878704499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5af83e8bac7ef%3A0xb28f528471b04b1d!2sNath%C3%A1lia%20Machado%20-%20Fonoaudi%C3%B3loga%20%7C%20Fonoaudiologia%20em%20S%C3%A3o%20Miguel%20Arcanjo!5e1!3m2!1sen!2sbr!4v1774325707743!5m2!1sen!2sbr";

export const EMAIL = "fononamachado@gmail.com";
export const PHONE_DISPLAY = "(15) 99666-1683";
export const ADDRESS = "R. Miguel Terra, 385 — Centro\nSão Miguel Arcanjo — SP";
export const CRFA = "CRFa 2-23700";


export const VIACEP_URL = (cep: string) =>
  `https://viacep.com.br/ws/${cep.replace(/\D/g, "")}/json/`;
