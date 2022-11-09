const dataEspecificidad = {
  title: '@layer CSS - especificidad',
  description:
    'Realizar pruebas para ver como funciona la especificidad en las cascadas de CSS usando @layer',
  html: `
<div class="wrap">
  <button type="button" id="more-specific-selector" class="btn">Primary</button>
</div>`,
  css: `
//@layer default, utilities, theme;
//@layer default, theme, utilities;

@layer default {
  .btn {
    border: 0;
    padding: 8px 16px;
    color: #fff;
  }
  .wrap button#more-specific-selector.btn {
    background-color: green;
  }
}

@layer theme {
  .btn {
    background-color: tomato;
  }
}

@layer utilities {
  .btn {
    background-color: purple;
  }
}`,
  css_pre_processor: 'scss',
};
const dataEspecificidadString = JSON.stringify(dataEspecificidad);

const dataEspecificidadInput = document.getElementById('data-especificidad-input');
dataEspecificidadInput.value = dataEspecificidadString;