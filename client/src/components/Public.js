import React from 'react';
import { Link } from 'react-router-dom';
export default function Public() {
	return (
		<>
			<main>
				<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
					<div className="px-4 py-6 sm:px-0">
						<div className="border-2 border-dashed border-indigo-200 rounded-md h-96">
							<div className="mt-10 mb-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
								<div className="sm:text-center lg:text-left">
									<h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
										İçeriği görebilmek için
										<br className="xl:hidden" />
										<span className="text-indigo-600"> giriş yapın</span>
									</h2>
									<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
										Bu bir todo uygulamasıdır. İçeriği görüp değiştirebilmek
										için giriş yapmanız gerekir.
									</p>
									<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
										<div className="rounded-md shadow">
											<Link
												to="/register"
												className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
											>
												Kayıt ol
											</Link>
										</div>
										<div className="mt-3 sm:mt-0 sm:ml-3">
											<Link
												to="/login"
												className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
											>
												Giriş
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
