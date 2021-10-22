import * as C from "./styles";
import { Item } from "../../types/item";

type Props = {
	item: Item;
};

export default function ListItem({ item }: Props) {
	return (
		<>
			<C.Container>Olá, Pivetão...</C.Container>
		</>
	);
}
