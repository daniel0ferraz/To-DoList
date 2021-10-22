import React, { useState } from "react";
import { Item } from "./types/item";
import * as C from "./app.styles";
import ListItem from "./components/ListItem/index";

export default function App() {
	const [list, SetList] = useState<Item[]>([
		{ id: 1, name: "Comprar Fonte 500W", done: false },
		{ id: 2, name: "Comprar Bolo na padaria", done: false },
	]);
	return (
		<>
			<C.Container>
				<C.Area>
					<C.Header>Lista de Tarefas</C.Header>

					{/*ÁREA DE ADICIONAR NOVA TAREFA */}

					{list.map((item, index) => (
						<ListItem key={index} item={item} />
					))}
				</C.Area>
			</C.Container>
		</>
	);
}
