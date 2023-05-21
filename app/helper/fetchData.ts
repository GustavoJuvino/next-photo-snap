export async function getData(url: string) {
    const res = await fetch(url, { next: { revalidate: 60 } });
  
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
  
    return res.json(); 
};