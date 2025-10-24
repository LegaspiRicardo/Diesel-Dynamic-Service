// src/components/BotonWhats.tsx
export default function BotonWhats() {
    return (
        <a
            href="https://api.whatsapp.com/send?phone=523320853721&text=Hola,%20me%20interesa%20solicitar%20informes%20sobre%20sus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 hover:scale-110 active:scale-95 transition-transform duration-300 shadow-lg hover:shadow-xl rounded-full"
        >
            <img
                src="/icons/whatsapp.png"
                alt="WhatsApp"
                className="w-12 sm:w-14 md:w-16 rounded-full"
            />
        </a>
    );
}