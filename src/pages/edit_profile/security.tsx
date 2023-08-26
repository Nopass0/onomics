import React from "react";

const Security: React.FC = () => {
    return  (
        <div id="Div_Settings" className="rounded-r-3xl ">
        {/* Profile Edit */}
        <div className="flex flex-col max-sm:justify-center ml-6 max-sm:ml-2">
            <div className="w-full flex flex-row justify-between">
                <h1 className="text-3xl mb-6 mr-12">Безопасность</h1>
            </div>
            <div className="flex flex-col md:flex-row mb-12">
                <div className="flex flex-col mr-28">
                    <h1 className="text-xl mb-4">Смена пароля</h1>
                    <div id="new_pswd" className="flex flex-col mb-4">
                        <input type="password" name="new_pswd" id="new_pswd" placeholder="*Новый пароль"  className="w-[220px] outline-0 border-none
                    bg-secondary dark:bg-primary-dark px-2 py-2 rounded-md  outline-none max-md:mb-3"/>
                    </div>
                    <div id="rep_new_pswd" className="flex flex-col mr-3 mb-4">
                        <input type="password" name="rep_new_pswd" id="rep_new_pswd" placeholder="*Пароль ещё раз"  className="w-[220px] outline-0 border-none
                    bg-secondary dark:bg-primary-dark px-2 py-2 rounded-md  outline-none max-md:mb-3"/>
                    </div>
                    <div id="old_pswd" className="flex flex-col mb-4">
                        <input type="password" name="old_pswd" id="old_pswd" placeholder="*Старый пароль"  className="w-[220px] outline-0 border-none
                    bg-secondary dark:bg-primary-dark px-2 py-2 rounded-md  outline-none max-md:mb-3"/>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-xl mb-4">Почта</h1>
                    <p>abvhgd@mail.ru</p>
                    <p className="text-[#15803d] dark:text-[#22c55e] mb-4">Почта подтверждена</p>
                    <div className="flex flex-col">
                        <label htmlFor="newMail" className=" max-md:mb-1 mb-2 ">Введите новую почту:</label>
                        <input type="mail" name="newMail" id="newMail" placeholder="Новая почта" className="w-[220px] outline-0 border-none
                    bg-secondary dark:bg-primary-dark px-2 py-2 rounded-md  outline-none max-md:mb-3" />
                    </div>
                </div>
            </div>
            <div className="">
            <input type="submit" name="save" id="save_btn" value="Сохранить"
            className="cursor-pointer text-md px-3 py-2 rounded-md text-primary duration-300 hover:bg-btn-secondary active:bg-btn-secondary bg-btn dark:bg-btn-secondary dark:active:bg-btn dark:hover:bg-btn"/>
            </div>
        </div>
    </div>
        
    );
}

export default Security;