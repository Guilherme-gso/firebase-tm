export async function uploadImage(uri = '') {
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
  
    xhr.onload = () => {
      resolve(xhr.response);
    };
  
    xhr.onerror = error => {
      console.log(error);
      reject(new TypeError('Network requested failed'));
    };
  
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });
  
  return blob;
}