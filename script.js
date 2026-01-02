let total = 0;
const list = document.getElementById('transaction-list');
const balanceDisplay = document.getElementById('total-balance');

document.getElementById('add-btn').addEventListener('click', () => {
    const reason = document.getElementById('reason').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;

    if (reason === '' || isNaN(amount)) {
        alert("Please enter valid details");
        return;
    }

    // Update Logic
    total += amount;
    balanceDisplay.textContent = `₹${total.toFixed(2)}`;

    // Create UI Element
    const li = document.createElement('li');
    li.classList.add('transaction-item');
    li.innerHTML = `
        <div>
            <strong>${reason}</strong><br>
            <small>${category}</small>
        </div>
        <span>- ₹${amount}</span>
    `;

    list.appendChild(li);

    // Clear Inputs
    document.getElementById('reason').value = '';
    document.getElementById('amount').value = '';
});
