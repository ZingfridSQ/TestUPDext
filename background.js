function compareVersions(version) {
    const parts1 =  version.split('.').map(Number);
    const parts2 = chrome.runtime.getManifest().version.split('.').map(Number);
    
    const maxLength = Math.max(parts1.length, parts2.length);
    
    for (let i = 0; i < maxLength; i++) {
        const num1 = parts1[i] || 0;
        const num2 = parts2[i] || 0;
        
        if (num1 > num2) return true;
        if (num1 < num2) return false;
    }
    
    return false;
}


fetch('https://raw.githubusercontent.com/ZingfridSQ/TestUPDext/refs/heads/main/manifest.json') // Ваш URL
  .then(response => response.json()) 
  .then(data => {
    version = data.version
    compareVersions(version)
    if(compareVersions(version)){
      console.log("Нужно обновления до версии: " + data.version +" Сейчас установлена версия: " + chrome.runtime.getManifest().version); 


    }
    else{
      console.log("Установлена последняя версия расширения!"); 
    }
    
  })
  .catch(error => {
    console.error('Ошибка:', error);
  });