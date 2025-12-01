import Classes from './ProductFeatureTable.module.css'

let dataTable = [
    {id: 1, title: 'وزن', descriptions: ['2.4 کیلوگرم']},
    {id: 2, title: 'رنگ', descriptions: ['سفید, مشکی']},
    {
        id: 3, title: 'امکانات دیگر', descriptions: [
            'MATRIX DISPLAY',
            'MYSTICLIGHT',
            'RESIZABLEBAR',
            'DYNAMIC BOOST 2',
            'COOLERBOOST5(2xFAN+6PIPE)',
            'HIRES',
            'بدنه فلزی',
            'Steel Series per-Key RGB with Anti-Ghost key (102 Key)',
        ]
    },
]

function ProductFeatureTable() {
    return (
        <table className={Classes.featureTable}>
            <tbody>
            {
                dataTable.map(item => (
                    <tr key={item.id}>
                        <th>{item.title}</th>
                        <td>{item.descriptions.map((des,idx) => <p key={idx}>{des}</p>)}</td>
                    </tr>
                ))
            }
            </tbody>

        </table>
    )
}

export default ProductFeatureTable