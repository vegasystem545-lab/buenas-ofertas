function updateTotal() {
            const p = parseInt(document.getElementById('producto').value);
            const z = parseInt(document.getElementById('zona').value);
            document.getElementById('envio-val').innerText = '$' + z.toLocaleString();
            document.getElementById('total-val').innerText = '$' + (p + z).toLocaleString();
        }
        document.getElementById('orderForm').onsubmit = (e) => {
            e.preventDefault();
            alert("¡Pedido registrado! Pronto nos comunicaremos.");
        };