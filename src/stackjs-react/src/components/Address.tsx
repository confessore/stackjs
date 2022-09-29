import React from 'react';

function Address() {
    return (
        <div className="md:flex bg-slate-100 rounded-xl m-1 p-8 md:p-0 dark:bg-slate-800">
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <div>
                    <p className="text-lg font-medium">
                        Community and Career Solutions
                    </p>
                </div>
                <div className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                        <p>1515 East Silver Springs Boulevard, Suite 137</p>
                        <p>Ocala, Florida 34470</p>
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                        "We are inside the Cascades"
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Address;