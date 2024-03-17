import { useState, useEffect } from "react";

import { allFormsTableData } from "../../../assets/data-arrays/adminFormData";

const AllFormsTable = () => {
	return (
		<div className='w-full h-full bg-gray-200 overflow-x-auto mx-auto'>
			<table class='table-fixed w-full border-2 border-black'>
				<thead>
					<tr> 
						{allFormsTableData[0].formName.map((field, id) => {
							return (
								<th key={id} class='w-32 h-fit text-[14px] border-2 border-black'>
									{field}
								</th>
							);
						})}
						{allFormsTableData[0].formType.map((field, id) => {
							return (
								<th key={id} class='w-32 h-fit  text-[14px] border-2 border-black'>
									{field}
								</th>
							);
						})}

						{allFormsTableData[0].fields.map((field, id) => {
							return (
								<th key={id} class='w-32 h-fit  text-[14px] border-2 border-black'>
									{field}
								</th>
							);
						})}
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Need To Map Data</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default AllFormsTable;
