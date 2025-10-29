// Componente del formulario de contacto para reutilizar

import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const subject = encodeURIComponent(`Asunto: ${formData.asunto || 'Solicitud de información'}`);
            const body = encodeURIComponent(
                `Nombre: ${formData.nombre}\n` +
                `Email: ${formData.email}\n` +
                `Teléfono: ${formData.telefono}\n` +
                `Asunto: ${formData.asunto}\n\n` +
                `Mensaje:\n${formData.mensaje}`
            );

            const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=ddsperiferico@gmail.com&su=${subject}&body=${body}`;

            // Abrir Gmail en nueva pestaña
            window.open(gmailLink, '_blank');

            setSubmitStatus('success');
            setFormData({
                nombre: '',
                email: '',
                telefono: '',
                asunto: '',
                mensaje: ''
            });

        } catch (error) {
            setSubmitStatus('error');
            console.error('Error al enviar el formulario:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-gray-700">Envíanos un mensaje</h3>

            {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                    ¡Mensaje creado con éxito! Se ha abierto tu aplicación de correo.
                </div>
            )}

            {submitStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                    Error al enviar el mensaje. Por favor, intenta nuevamente.
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                            Nombre completo *
                        </label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                            placeholder="Tu nombre completo"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                            placeholder="tu@email.com"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                            Teléfono
                        </label>
                        <input
                            type="tel"
                            id="telefono"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                            placeholder="33 1234 5678"
                        />
                    </div>

                    <div>
                        <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-2">
                            Asunto *
                        </label>
                        <select
                            id="asunto"
                            name="asunto"
                            value={formData.asunto}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                        >
                            <option value="">Selecciona un asunto</option>
                            <option value="Cotización de servicios">Cotización de servicios</option>
                            <option value="Solicitud de información">Solicitud de información</option>
                            <option value="Cita para servicio">Cita para servicio</option>
                            <option value="Queja o sugerencia">Queja o sugerencia</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                        Mensaje *
                    </label>
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors resize-vertical"
                        placeholder="Describe tu consulta o requerimiento..."
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-800 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </button>
            </form>
        </div>
    );
}