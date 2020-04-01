import React from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
export default function Protected() {
	return (
		<>
			{' '}
			<header className="bg-white shadow mt-12 bg-indigo-600 mb-12">
				<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold leading-tight text-gray-100 text-center md:text-left">
						Kontrol Paneli
					</h1>
				</div>
			</header>
			<AddTodo />
			<TodoList />
		</>
	);
}
