Project name: CapGain

CapGain is a specialized, client-side application designed to help cryptocurrency investors estimate the potential value and profit of their holdings based on hypothetical future market capitalization (MCAP) targets. It is built using HTML, Tailwind CSS, JavaScript, and uses Firebase Firestore for secure data persistence.

1. The CapGain Application Functions (Views)

The application is structured around four main views, accessed via the fixed bottom navigation bar:

Home: Provides an overview of the application, its purpose a list of the services offered
 User onboarding and purpose explanation.

Calculate: The core utility where the user inputs their investment parameters and the projected market cap goal.
Performs the profit and target price calculation and displays results instantly.

History: Displays a chronological list of all previous calculations saved by the authenticated user.
Securely retrieves and renders past projections from Firebase Firestore.

Profile: Shows the user's authentication status and their unique userId.
Confirms user identity and provides necessary troubleshooting information.

2. Core Functionality: How the Calculation Works

The app's main purpose is to determine the potential profit by projecting the coin's future price. This is done through a simple, yet powerful, three-step calculation process based on the user's inputs:

A. Required User Inputs
1. Initial Investment ($): How much money you spent.

2. Purchase Price ($): The price per coin when you bought it.

3. Circulating Supply (Coins): The current total number of coins in circulation. (Crucial for determining Market Cap math.)

4. Target Market Cap ($): The desired future market capitalization of the coin.



