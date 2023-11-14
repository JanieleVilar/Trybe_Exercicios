<h1>Revendo comandos de GIT</h1>
<h2>git init</h2> 
<p>Inicia um repositório local na pasta em questão. Nunca deve ser feito Git init na pasta root ou /.</p>
<h2>git status</h2>
<p>Verifica quais modificações foram feitas e podem ser adicionadas.</p>
<h2>git add</h2>
<p>Adiciona as modificações, deixando elas pronta para serem "commitadas". Ou seja após feita uma alteração em mais de um arquivo por exemplo, pode-se adicionar todas de uma vez com o "git add ." ou escolher qual adicionar com o "git add [nome_do_arquivo]"</p>
<h2>git commit</h2>
<p>Após esse comando, oficialmente as modificações podem ser enviadas para um repositório remoto. Estando sempre acompanhadas por uma descrição do que foi modificado com o uso do "git commit -m [descrição]"</p>
<h2>git branch</h2>
<p>Mostra todas as branchs criadas e indica qual a branch que está no momento</p>
<h2>git checkout -b</h2>
<p>Cria uma nova branch e automaticamente muda para essa branch criada.</p>
<h2>git checkout</h2>
<p>Muda para a branch espeificada no comando. Por exemplo: git checkout [nome_da_branch]</p>
<h2>git log</h2>
<p>Mostra o histórico de todos os commits realizados até então.</p>
<h2>git merge</h2>
<p>Atualiza a branch na qual o comando foi dado com as alterações da branch especificada no comando. Por exemplo: git merge [nome-da branch]. Se comando for executado na main, então ela recebrá as alterações.</p>
<h2>git commit -am</h2>
<p>É uma junção dos comandos "git add" e "git commit -m", ou seja  ele já lança para área de staging e faz o commit.</p>
<h2>git pull</h2>
<p>Traz as alterações do repositório remoto da branch atual para o repositório local.</p>
<h2>git pull origin</h2>
<p>Utilizando "git pull origin [nome_da_branch]", trará as alterações feitas na branch remota especificada para a branch local atual.</p>
<h2>git push -u origin [nome_da_branch]</h2>
<p>Envia as alterações da branch atual para o repositório remoto.</p>
<h2>git push</h2>
<p>Envia as alterações feitas na branch atual quando a mesma já está disponível no repositório remoto.</p>
