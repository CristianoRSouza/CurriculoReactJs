import whatsImg from "../assets/whats2.png";

export const Whats = () => {
  return (
    <a
      href="https://wa.me/+5541989008598"
      target="_blank"
      rel="noopener noreferrer"
      className="animate-pulse-glow fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-110 hover:bg-green-400 hover:shadow-green-500/50 md:h-16 md:w-16"
      aria-label="Entrar em contato pelo WhatsApp"
    >
      <img
        src={whatsImg}
        alt="WhatsApp"
        className="h-7 w-7 md:h-8 md:w-8"
      />
    </a>
  );
};
