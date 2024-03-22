import { useState, useEffect } from "react";

import { allFormsTableData } from "../../../assets/data-arrays/adminFormData";

const AllFormsTable = () => {
	return (
		<div className='w-full h-full  overflow-x-auto mx-auto px-4'>
			<table class='table-fixed w-full border-2 border-black bg-gray-200'>
				<thead>
					<tr>
						{allFormsTableData[0].formName.map((field, id) => {
							return (
								<th
									key={id}
									class='w-12 h-[6px] text-[12px] border-2 border-black text-ellipsis overflow-hidden whitespace-nowrap hover:whitespace-normal hover:scale-125 hover:overflow-visible hover:z-30 hover:w-32 hover:text-wrap hover:p-4'
								>
									{field}
								</th>
							);
						})}
						{allFormsTableData[0].formType.map((field, id) => {
							return (
								<th
									key={id}
									class='w-12 h-[6px] text-[12px] border-2 border-black text-ellipsis overflow-hidden whitespace-nowrap hover:whitespace-normal hover:scale-125 hover:overflow-visible hover:z-30 hover:w-32 hover:text-wrap hover:p-4'
								>
									{field}
								</th>
							);
						})}

						{allFormsTableData[0].fields.map((field, id) => {
							return (
								<th
									key={id}
									class='w-12 h-[6px] text-[12px] border-2 border-black text-ellipsis overflow-hidden whitespace-nowrap hover:whitespace-normal hover:scale-125 hover:overflow-visible hover:z-30 hover:w-32 hover:text-wrap hover:p-4'
								>
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
