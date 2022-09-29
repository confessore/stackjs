import React from 'react';

function Footer() {
    return (
        <div className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://media-exp1.licdn.com/dms/image/C4E03AQGtqn8CX5_4lQ/profile-displayphoto-shrink_800_800/0/1661729575909?e=1667433600&v=beta&t=MtqXvdTy_4n-_XQfbIEgC_zfrhEsSg2DeGDCRpC11Lo" alt="" width="384" height="512" />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <div>
                    <p className="text-lg font-medium">
                        copyright © 2022 | all rights reserved
                    </p>
                </div>
                <div className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                        made with ❤️ by steven confessore
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                        balasolu | dreams realized
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;