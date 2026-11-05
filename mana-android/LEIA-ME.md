# Maná: como gerar o app Android (APK)

Você não precisa instalar nada no computador. Um serviço gratuito do GitHub monta o app para você.

1. Crie uma conta em github.com (grátis).
2. Clique em "New repository", dê o nome "mana" e crie (pode ser privado).
3. Clique em "uploading an existing file" e arraste **todo o conteúdo desta pasta** (depois de descompactar o zip).
   - Se a pasta oculta ".github" não subir, clique em "Add file" > "Create new file", digite o nome `.github/workflows/android.yml` e cole o conteúdo do arquivo COLAR-android.yml.
4. Clique em "Commit changes".
5. Abra a aba **Actions**. Se o "Gerar APK" ainda não estiver rodando, escolha-o na lista e clique em "Run workflow".
6. Espere uns 5 a 10 minutos até aparecer um visto verde.
7. Abra essa execução, role até **Artifacts** e baixe **Mana-APK**. Descompacte: dentro está o `app-debug.apk`.
8. Envie o APK para o celular Android e toque nele para instalar. Se pedido, permita "instalar apps desconhecidos".

Se aparecer um X vermelho, copie a mensagem de erro e me envie.

Para a Play Store será preciso gerar uma versão assinada (.aab) e trocar o appId em capacitor.config.json.
