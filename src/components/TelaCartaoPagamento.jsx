import QuestionTelaCartaoPg from "./QuestionTelaCartaoPg";
import PrazoPag from "./PrazoPag";

function TelaCartaoPagamento() {
    return (
        <div>
            <QuestionTelaCartaoPg />
            <div className="mt-8">
                <div className="relative">
                    <div className="absolute top-10 left-7">
                        <span className="absolute w-32 pl-3 pr-2 bottom-0 ml-3 mb-5  bg-slate-300 p-0.5 rounded-md text-sm">Nome Completo</span>
                    </div>
                    <div className="flex flex-col ml-5 mr-5 p-3">
                        <form class="w-auto">
                            <div class="mb-5">
                                <input type="text" id="nameSobre" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none" placeholder="Ex:Nome sobre nome" required />
                            </div>
                        </form>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute top-10 left-7">
                        <span className="absolute w-13 pl-1 pr-2 bottom-0 ml-3 mb-5  bg-slate-300 p-0.5 rounded-md text-sm">CPF</span>
                    </div>
                    <div className="flex flex-col ml-5 mr-5 p-3">
                        <form class="w-auto">
                            <div class="mb-5">
                                <input type="number" id="cpf" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none" placeholder="Ex:000.000.000-00" required />
                            </div>
                        </form>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute top-10 left-7">
                        <span className="absolute w-32 pl-1 pr-2 bottom-0 ml-3 mb-5  bg-slate-300 p-0.5 rounded-md text-sm">Numero do cartão</span>
                    </div>
                    <div className="flex flex-col ml-5 mr-5 p-3">
                        <form class="w-auto">
                            <div class="mb-5">
                                <input type="number" id="numCartao" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none" placeholder="Ex:000.000.000-00" required />
                            </div>
                        </form>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="relative">
                        <div className="absolute top-10 left-7">
                            <span className="absolute w-auto pl-1 pr-2 bottom-0 ml-3 mb-5  bg-slate-300 p-0.5 rounded-md text-sm">Vencimento</span>
                        </div>
                        <div className="flex flex-col ml-5 mr-5 p-3">
                            <form class="w-32">
                                <div class="mb-5">
                                    <input type="date" id="date" class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none" required />
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute top-10 left-7">
                            <span className="absolute w-auto pl-1 pr-2 bottom-0 ml-3 mb-5  bg-slate-300 p-0.5 rounded-md text-sm">CVV</span>
                        </div>
                        <div className="flex flex-col ml-5 mr-5 p-3">
                            <form class="w-36">
                                <div class="mb-5">
                                    <input type="number" id="cvv" class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none" placeholder="Ex:000" required />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>



                <div className="relative">
                    <div className="absolute top-8 left-7">
                        <span className="absolute w-auto pl-2 pr-2 bottom-0 ml-3 mb-5  bg-slate-300 p-0.5 rounded-md text-sm">Parcelas</span>
                    </div>
                    <div className="flex items-center justify-between ml-7 mr-7 pr-1 pl-1 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500">
                        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-slate-700 focus:ring-slate-300 font-medium rounded-sm text-sm px-5 py-2.5 pl-2 pt-3" type="button">1x R$ 15.300,00</button>
                        <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-5" />
                        </svg>
                    </div>

                    <div id="dropdown" class="hidden w-auto z-20 mt-0 ml-7 mr-7 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <label id="pix_price_parcelado" for="helper-checkbox" className="block px-4 py-2 hover:bg-blue-200 focus:border-blue-500">2x R$ 30.500,00</label>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-center pt-2 w-auto h-8 ml-8 mr-8 mt-3 text-xs text-center bg-blue-950 rounded text-cyan-50">
                    <button className='flex cursor-pointer'>
                        <span>Pagar</span>
                    </button>
                </div>

                <div className="ml-6 mr-6">
                    <PrazoPag />
                </div>

            </div>
        </div>
    );
};

export default TelaCartaoPagamento;