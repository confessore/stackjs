import React from 'react';

function Footer() {
    return (
        <div className="footer">
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p className="text-lg font-medium">
                            "Yo, this Tailwind CSS on React stuff is pretty dope.
                            It turns up quick and looks fly as hell. My people love it."
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-sky-500 dark:text-sky-400">
                            Steven Confessore
                        </div>
                        <div className="text-slate-700 dark:text-slate-500">
                            Staff Engineer, United States
                        </div>
                    </figcaption>
                </div>
            </figure>
        </div>
    );
}

export default Footer;