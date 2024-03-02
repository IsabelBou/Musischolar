
// gets Verovio's MIDI string and turns it into a blob
export const useBlob = midiString => {
	const byteString = atob(midiString.split(',')[1]);
    const mimeString = midiString.split(',')[0].split(':')[1].split(';')[0];

    let ab = new ArrayBuffer(byteString.length);
    let ia = new Uint8Array(ab);
	
    for (let i = 0; i < byteString.length; i++) {
		ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], {type: mimeString});
};