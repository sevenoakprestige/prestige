export async function getExchangeRate(base: string, symbols: string): Promise<number | null> {
    try {
        const res = await fetch(`https://api.frankfurter.dev/v1/latest?base=${base}&symbols=${symbols}`, {
            next: { revalidate: 86400 } // Revalidate every 24 hours
        });
        
        if (!res.ok) {
            console.error('Failed to fetch exchange rate, status:', res.status);
            return null;
        }
        
        const data = await res.json();
        const rate = data?.rates?.[symbols];
        
        if (typeof rate === 'number') {
            return rate;
        }
        
        return null;
    } catch (error) {
        console.error('Exchange rate fetch error:', error);
        return null;
    }
}
