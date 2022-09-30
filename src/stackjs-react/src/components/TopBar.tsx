import React from 'react';

function TopBar() {
    return (
        <div className="sticky top-0 w-full p-4 bg-slate-200 dark:bg-slate-800">
            <div className="text-left space-y-2 justify-center align-center">
                <div>
                    <p className="text-lg font-bold">
                        Community and Career Solutions
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TopBar;