import AddNew from "./AddNew";
import Import from "./Import";
import TableManagement from "./TableManagement";

export default function Header() {
    const namePage = "Invoices"

    return (
        <div className="Header">
            <div className="Name">
                <h2>{namePage}</h2>
                <AddNew />
                <Import namePage={namePage}/>
            </div>
            <div className="ButtonControl">
                <TableManagement />
            </div>
            Hello user
        </div>
    )
}