import React from 'react';

function Contact() {
    return (
        <div className="md:flex bg-slate-100 rounded-xl m-1 p-8 md:p-0 dark:bg-slate-800">
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <div>
                    <p className="text-lg font-medium">
                        If you have questions about what programs we have available to you, feel free to give us a call
                    </p>
                </div>
                <div className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                        +1 (833) 4-CCS-JOB
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                        +1 (833) 422-7562
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;