import Seat from "./Seat";

function SeatList({ item }) {
	return (
		<>
			<tr>
				<td>{item.row}</td>
				{item.seatNames.map((item, index) => (
					<Seat key={index} item={item} />
				))}
			</tr>
		</>
	);
}

export default SeatList;
