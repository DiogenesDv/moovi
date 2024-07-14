import Header_logo from "./Header_logo";
import QuestionTelaCartaoPg from "./QuestionTelaCartaoPg";

function TelaCartaoPagamento() {
    return (
        <div>
            <Header_logo />
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
                            <form class="w-auto">
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
                            <form class="w-auto">
                                <div class="mb-5">    
                                <input type="number" id="cvv" class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none" placeholder="Ex:000" required />
                                </div>         
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default TelaCartaoPagamento;