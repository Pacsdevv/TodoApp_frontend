
export interface Tasks {
    category: 'trabajo' | 'casa';
    description: string;
}

export interface AddedTasksProps {
    tasks: Tasks[]
}





export const AddedTasks = ({ tasks }: AddedTasksProps) => {
    return (
        <ul
            style={{ margin: 4 }}
            className="border"
        >
            {
                tasks.map(({ description, category }, index) => (
                    <li
                        key={description}
                        className={`p-2 flex ${index < tasks.length - 1 ? 'border-b-2' : ''}`}


                    >
                        <div className="w-full flex" >
                            <div className="w-3/4  " >{description}</div>
                            <div  >{category}</div>
                        </div>


                    </li>
                ))
            }
        </ul>
    );
}
