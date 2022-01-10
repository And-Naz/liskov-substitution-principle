import './App.css';
import Description from "./components/Description"
import SimpleIconButton from './components/SimpleIconButton';
import DefaultIconButton from './components/DefaultIconButton';
import IconButtonWithBadge from './components/DefaultIconButtonWithBadge';
import { useRef } from 'react';
function App() {
	const ref1 = useRef()
	const ref2 = useRef()
	const ref3 = useRef()
	return (
		<div className="App">
			<table className="app_list">
				<thead>
					<tr className='app_list_item'>
						<td>Component</td>
						<td>small</td>
						<td>medium</td>
						<td>big</td>
					</tr>
				</thead>
				<tbody>
					<tr className='app_list_item'>
						<td>
							<Description>SimpleIconButton</Description>
						</td>
						<td>
							<SimpleIconButton size="small" />
						</td>
						<td>
							<SimpleIconButton size="medium" />
						</td>
						<td>
							<SimpleIconButton size="big" />
						</td>
					</tr>
					<tr className='app_list_item'>
						<td>
							<Description>DefaultIconButton</Description>
						</td>
						<td>
							<DefaultIconButton size="small" />
						</td>
						<td>
							<DefaultIconButton size="medium" />
						</td>
						<td>
							<DefaultIconButton size="big" />
						</td>
					</tr>
					<tr className='app_list_item'>
						<td>
							<Description>IconButtonWithBadge</Description>
						</td>
						<td>
							<IconButtonWithBadge size="small" />
						</td>
						<td>
							<IconButtonWithBadge size="medium" />
						</td>
						<td>
							<IconButtonWithBadge size="big" />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default App;