# PuTTY Redesign

Redesign visual do site oficial do [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/), mantendo o **conteúdo literal** e a **ordem** das páginas originais.

> **Aviso:** Este projeto é apenas um redesign estético. PuTTY é copyright de Simon Tatham e equipe. O site oficial continua sendo a fonte canônica.

## Demo

Após publicar no GitHub Pages:

**https://suellenmirandassuh.github.io/putty-redesign/**

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abre em [http://localhost:5173](http://localhost:5173).

## Build

```bash
# Produção local
npm run build

# Build para GitHub Pages (subpath /putty-redesign/)
npm run build:gh
```

## Publicação no GitHub Pages

1. Faça push do repositório para o GitHub.
2. Em **Settings → Pages → Build and deployment**, escolha **GitHub Actions**.
3. O workflow `.github/workflows/deploy.yml` publica automaticamente a cada push na branch `main`.

Ou dispare manualmente em **Actions → Deploy to GitHub Pages → Run workflow**.

## Estrutura

- `src/` — app React (layout, rotas, estilos)
- `public/content/` — HTML oficial espelhado do site chiark (conteúdo literal)
- `src/components/HtmlContent.tsx` — renderiza o HTML com a estética nova

## Atualizar conteúdo do site oficial

Baixe novamente os HTMLs de `https://www.chiark.greenend.org.uk/~sgtatham/putty/` para `public/content/` quando houver nova versão do PuTTY.

## Licença do código deste redesign

MIT — ver repositório. O conteúdo textual e links de download pertencem ao projeto PuTTY original.
