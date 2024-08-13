import { useContext } from "react";
import { resultsContext } from "../Context/ResultsContext";

import logoTxt from '../../images/logo-text.webp';

function DataTable() {

    const context = useContext(resultsContext);

    if (context.loading) return <p>Loading...</p>;
    if (context.error) return <p>{context.error}</p>;

    console.log('Results Data:', context.results);

    return (
        <>
            <main>
                <div className="head">
                    <img className="logo" src={logoTxt} />
                    <h3>Here you can check the results of the latest competitions held.</h3>
                </div>
                <div className="body">
                    <table>
                        <thead className="table-head">
                            <tr>
                                <th>ID</th>
                                <th>HCP</th>
                                <th>Scratch</th>
                                <th>Hits</th>
                                <th>Hole</th>
                            </tr>
                        </thead>
                        <tbody className="table-body">
                            {context.results.map((result, index) => (
                                <tr key={`${result['@id']}-${index}`}>
                                    <td>{result.id}</td>
                                    <td>{result.hcp}</td>
                                    <td>{result.scratch}</td>
                                    <td>{result.hits}</td>
                                    <td>{result.hole}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}

export default DataTable