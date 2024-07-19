function PrazoPag() {
    return (
        <div className="flex flex-col items-center mt-4 ml-2 mr-2">
            <p id="prazo-pag" className="text-xs font-normal dark:text-gray-300 text-slate-500">Prazo de pagamento</p>
            <p id="prazo-pag-data" className="text-xs font-bold">15/12/2021 - 08:17</p>

            <div className="container flex-col mt-4">
                <div className="flex justify-between">
                    <div className="pb-2">
                        <input type="radio" id="radio-pix-prazo" name="radio" className="w-4 h-4 cursor-pointer" /> <span className="font-light">1° entrada no Pix</span>
                    </div>
                    <div>
                        <label id="radio-pix-prazo-preco" for="helper-checkbox" className="font-medium text-gray-900 dark:text-gray-300">R$ 15.300,00</label>
                    </div>
                </div>

                <div className="flex justify-between border-b-2 border-b-slate-200">
                    <div className="pb-2">
                        <input type="radio" id="radio-pix-prazo" name="radio" className="w-4 h-4 cursor-pointer" /> <span className="font-light">2° no Cartão</span>
                    </div>
                    <div>
                        <label id="radio-pix-prazo-preco" for="helper-checkbox" className="font-medium text-gray-900 dark:text-gray-300">R$ 15.300,00</label>
                    </div>
                </div>
                <div className="flex justify-between pt-3 pb-3 font-light border-b-2 border-b-slate-200">
                    <label id="cet" htmlFor="cet">CET 0,5%</label> <label id="totalQr" htmlFor="">Total: 30.600,00</label>
                </div>

                <div>
                    <div className="flex items-center justify-between pr-1 pl-1 border-b-2 border-b-slate-200">
                        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-slate-700 focus:ring-slate-300 font-medium rounded-sm text-sm px-5 py-2.5 pl-0" type="button">Como funciona?</button>    
                        <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </div>
                    
                    <div id="dropdown" class="hidden w-auto z-20 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <span class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Loren ipson loren is, ipson loren is ipson loren is, loren isloren is</span>
                            </li>
                            
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col items-center mt-6">
                    <span className="text-xs text-gray-700">Identificador:</span>
                    <span className="text-sm">2c1b951f356c4680b13ba1c9fc889c47</span>
                </div>
                
            </div>
        </div>

    );
};

export default PrazoPag;