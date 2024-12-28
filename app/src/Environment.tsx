const apiUrl = import.meta.env.VITE_API_URL;

export const downloadServiceApiUrl = import.meta.env.VITE_DOWNLOAD_SERVICE_API_URL ?? `${apiUrl}/download`;
export const emailServiceApiUrl = import.meta.env.VITE_EMAIL_SERVICE_API_URL ?? `${apiUrl}/email`;
