const menuBtn = document.getElementById('menu-icon')
const mobNav = document.getElementById('mob-nav')
const closeNavBtn = document.getElementById('close-nav')

function toggleNav() {
    mobNav.classList.remove('hidden')
    // if(mobNav.classList.contains('block')){
        menuBtn.classList.add('hidden')
    // }

    closeNavBtn.classList.remove('hidden')
    closeNavBtn.classList.add('block')
}

function closeNav() {
    mobNav.classList.add('hidden')
    closeNavBtn.classList.add('hidden')
    menuBtn.classList.remove('hidden')


}


menuBtn.addEventListener("click", toggleNav)
closeNavBtn.addEventListener('click', closeNav)


 // Get a reference to the connect button and wallet address element
 const connectButton = document.getElementById('connect-button');
 const walletAddress = document.getElementById('wallet-address');

 // When the user clicks the connect button
 connectButton.addEventListener('click', async () => {
   // Check if Metamask is installed
   const provider = await detectEthereumProvider();

   if (provider) {
     // Prompt the user to connect to their wallet
     const accounts = await provider.request({ method: 'eth_requestAccounts' });
     const address = accounts[0];
     const shortAddress = `${address.substring(0, 3)}...${address.substring(40)}`;
     connectButton.textContent = `Connected: ${shortAddress}`;
     connectButton.classList.add('bg-orange-400')
     connectButton.classList.add('border-none')
     connectButton.classList.add('text-black')
   } else {
     // Metamask is not installed
     alert('Please install Metamask to connect your wallet.');
   }
 });