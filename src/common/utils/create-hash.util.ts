import { webcrypto } from "crypto";


export const generateHash = async (text: string): Promise<string> => {
    const encoder = new TextEncoder();
    const encodedText = encoder.encode(text);
    const hashBuffer = await webcrypto.subtle.digest('SHA-256', encodedText);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');

    return hashHex;
}
