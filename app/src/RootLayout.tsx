import React from 'react';
import './index.css'; // Global styles
import { ThemeProvider } from './components/theme-provider'; // Adjust import as needed
import '@fontsource/inter/400.css'; /* Regular */
import '@fontsource/inter/700.css'; /* Bold */


const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div
            className="min-h-screen font-sans antialiased relative bg-background-pattern bg-repeat bg-[length:60px] bg-left"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent dark:from-slate-950 dark:via-slate-950/80 z-0"></div>
            <ThemeProvider
                attribute="class"
                defaultTheme="light"
                enableSystem={false}
                disableTransitionOnChange
            >
                <div className="relative z-10">{children}</div>
            </ThemeProvider>
        </div>
    );
};

export default RootLayout;
