export default function formatoMoeda (moeda) {
    return 'R$' + Number (moeda.toFixed(2)).toLocaleString() + " ";
}