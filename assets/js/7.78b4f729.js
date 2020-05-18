(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{362:function(t,s,e){"use strict";e.r(s);var a=e(18),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"install-helm-flux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-helm-flux"}},[t._v("#")]),t._v(" Install Helm + Flux")]),t._v(" "),e("p",[t._v("Flux Architecture:")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://github.com/fluxcd/flux/raw/18e5174581f44ed8c9a881dd5071179eed1ebf4d/docs/_files/flux-cd-diagram.png",alt:"Flux Architecture",title:"Flux Architecture"}})]),t._v(" "),e("p",[t._v("Create git repository which will be used by Flux in GitHub:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("hub create -d "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Flux repository for k8s-flux-istio-gitlab-harbor"')]),t._v(" -h "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://ruzickap.github.io/k8s-flux-istio-gitlab-harbor/"')]),t._v(" ruzickap/k8s-flux-repository\n")])])]),e("p",[t._v("Output:")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("A git remote named 'origin' already exists and is set to push to 'ssh://git@github.com/ruzickap/k8s-flux-istio-gitlab-harbor.git'.\nhttps://github.com/ruzickap/k8s-flux-repository\n")])])]),e("p",[t._v("Clone newly create git repository:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" -n "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^github.com "')]),t._v(" ~/.ssh/known_hosts"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v(" ssh-keyscan github.com "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.ssh/known_hosts "),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),t._v("/dev/null"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"petr.ruzicka@gmail.com"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" -C tmp clone git@github.com:ruzickap/k8s-flux-repository.git\n")])])]),e("p",[t._v("Output:")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Cloning into 'k8s-flux-repository'...\nwarning: You appear to have cloned an empty repository.\n")])])]),e("p",[t._v("Create initial flux repository structure and add it into the git repository:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" -v files/flux-repository/README.md tmp/k8s-flux-repository/\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -v tmp/k8s-flux-repository/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("namespaces,releases,workloads"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" -C tmp/k8s-flux-repository "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" -C tmp/k8s-flux-repository commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Initial commit"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" -C tmp/k8s-flux-repository push -q\n")])])]),e("p",[t._v("Output:")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("'files/flux-repository/README.md' -> 'tmp/k8s-flux-repository/README.md'\nmkdir: created directory 'tmp/k8s-flux-repository/namespaces'\nmkdir: created directory 'tmp/k8s-flux-repository/releases'\nmkdir: created directory 'tmp/k8s-flux-repository/workloads'\n[master (root-commit) 01ec748] Initial commit\n 1 file changed, 1 insertion(+)\n create mode 100644 README.md\n")])])]),e("h2",{attrs:{id:"install-helm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-helm"}},[t._v("#")]),t._v(" Install Helm")]),t._v(" "),e("p",[t._v("Install "),e("a",{attrs:{href:"https://helm.sh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Helm"),e("OutboundLink")],1),t._v(" binary:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -s https://raw.githubusercontent.com/helm/helm/master/scripts/get "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" -s -- --version v2.14.3\n")])])]),e("p",[t._v("Output:")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Helm v2.14.3 is already v2.14.3\nRun 'helm init' to configure helm.\n")])])]),e("p",[t._v("Create a service account and a cluster role binding for Tiller:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("kubectl -n kube-system create sa tiller\n\nkubectl create clusterrolebinding tiller-cluster-rule "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --clusterrole"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cluster-admin "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --serviceaccount"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("kube-system:tiller\n")])])]),e("p",[t._v("Output:")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("serviceaccount/tiller created\nclusterrolebinding.rbac.authorization.k8s.io/tiller-cluster-rule created\n")])])]),e("p",[t._v("Deploy Tiller in "),e("code",[t._v("kube-system")]),t._v(" namespace:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("helm init --skip-refresh --upgrade --service-account tiller --history-max "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" --wait\n")])])]),e("p",[t._v("Output:")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Creating /home/pruzicka/.helm\nCreating /home/pruzicka/.helm/repository\nCreating /home/pruzicka/.helm/repository/cache\nCreating /home/pruzicka/.helm/repository/local\nCreating /home/pruzicka/.helm/plugins\nCreating /home/pruzicka/.helm/starters\nCreating /home/pruzicka/.helm/cache/archive\nCreating /home/pruzicka/.helm/repository/repositories.yaml\nAdding stable repo with URL: https://kubernetes-charts.storage.googleapis.com\nAdding local repo with URL: http://127.0.0.1:8879/charts\n$HELM_HOME has been configured at /home/pruzicka/.helm.\n\nTiller (the Helm server-side component) has been installed into your Kubernetes Cluster.\n\nPlease note: by default, Tiller is deployed with an insecure 'allow unauthenticated users' policy.\nTo prevent this, run `helm init` with the --tiller-tls-verify flag.\nFor more information on securing your installation see: https://docs.helm.sh/using_helm/#securing-your-helm-installation\n")])])]),e("p",[t._v("Check if the tiller was installed properly:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("kubectl get pods -l "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("app")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("helm -n kube-system\n")])])]),e("p",[t._v("Output:")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("NAME                             READY   STATUS    RESTARTS   AGE\ntiller-deploy-7b8b4499b5-cs6zf   1/1     Running   0          11s\n")])])]),e("h2",{attrs:{id:"install-flux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-flux"}},[t._v("#")]),t._v(" Install Flux")]),t._v(" "),e("p",[t._v("Add the Flux repository:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("helm repo "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" fluxcd https://charts.fluxcd.io\nhelm update\n")])])]),e("p",[t._v("Output:")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('"fluxcd" has been added to your repositories\nCommand "update" is deprecated, use \'helm repo update\'\n\nHang tight while we grab the latest from your chart repositories...\n...Skip local chart repository\n...Successfully got an update from the "fluxcd" chart repository\n...Successfully got an update from the "stable" chart repository\nUpdate Complete.\n')])])]),e("p",[t._v("Apply the Helm Release CRD:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("kubectl apply -f https://raw.githubusercontent.com/fluxcd/flux/helm-0.10.1/deploy-helm/flux-helm-release-crd.yaml\n")])])]),e("p",[t._v("Output:")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("customresourcedefinition.apiextensions.k8s.io/helmreleases.flux.weave.works created\n")])])]),e("p",[t._v("Install Flux:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("helm "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --name flux --namespace flux --wait --version "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.12")]),t._v(".0 fluxcd/flux "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --set git.email"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"petr.ruzicka@gmail.com"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --set git.url"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("git@github.com:ruzickap/k8s-flux-repository "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --set git.user"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Flux"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --set helmOperator.create"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --set helmOperator.createCRD"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --set registry.insecureHosts"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"harbor.'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v('"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --set registry.pollInterval"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10s"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --set syncGarbageCollection.enabled"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n")])])]),e("p",[t._v("Output:")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("NAME:   flux\nLAST DEPLOYED: Thu Aug 29 09:39:10 2019\nNAMESPACE: flux\nSTATUS: DEPLOYED\n\nRESOURCES:\n==> v1/ConfigMap\nNAME              DATA  AGE\nflux-kube-config  1     16s\n\n==> v1/Deployment\nNAME                READY  UP-TO-DATE  AVAILABLE  AGE\nflux                1/1    1           1          16s\nflux-helm-operator  1/1    1           1          16s\nflux-memcached      1/1    1           1          16s\n\n==> v1/Pod(related)\nNAME                                 READY  STATUS   RESTARTS  AGE\nflux-bbb76576-8clvg                  1/1    Running  0         16s\nflux-helm-operator-6877b9f564-rt5rl  1/1    Running  0         16s\nflux-memcached-88db78d9d-vnrl7       1/1    Running  0         16s\n\n==> v1/Secret\nNAME             TYPE    DATA  AGE\nflux-git-deploy  Opaque  1     16s\n\n==> v1/Service\nNAME            TYPE       CLUSTER-IP      EXTERNAL-IP  PORT(S)    AGE\nflux            ClusterIP  100.70.220.201  <none>       3030/TCP   16s\nflux-memcached  ClusterIP  100.64.195.153  <none>       11211/TCP  16s\n\n==> v1/ServiceAccount\nNAME  SECRETS  AGE\nflux  1        16s\n\n==> v1beta1/ClusterRole\nNAME  AGE\nflux  16s\n\n==> v1beta1/ClusterRoleBinding\nNAME  AGE\nflux  16s\n\n\nNOTES:\nGet the Git deploy key by either (a) running\n\n  kubectl -n flux logs deployment/flux | grep identity.pub | cut -d '\"' -f2\n\nor by (b) installing fluxctl through\nhttps://github.com/weaveworks/flux/blob/master/docs/references/fluxctl.md#installing-fluxctl\nand running:\n\n  fluxctl identity\n")])])]),e("p",[t._v("Install fluxcli:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" -q -c https://github.com/fluxcd/flux/releases/download/1.14.0/fluxctl_linux_amd64 -O /usr/local/bin/fluxctl\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" a+x /usr/local/bin/fluxctl\n")])])]),e("p",[t._v("Set the namespace ("),e("code",[t._v("flux")]),t._v(") where flux was installed for running "),e("code",[t._v("fluxctl")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("FLUX_FORWARD_NAMESPACE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("flux\n")])])]),e("p",[t._v("Obtain the ssh public key through "),e("code",[t._v("fluxctl")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("fluxctl identity\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" -x /usr/bin/chromium-browser "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v(" chromium-browser https://github.com/ruzickap/k8s-flux-repository/settings/keys/new "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n")])])]),e("p",[t._v("Output:")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCyGvcJPcFxvsc9SHtJiOt7G6pvNQgmcf+PIIfy6PoEvXK2naXmKw68+dtKeIoMzvp63QxoNB+B6qamMbkWqaVCjS4glAXKmf68k/eCazcPNZaQRmL/YUmgmyZ8AF02fDmM/RQMz/2hUtUE6UYs/T5vYUdDwYb09nOmVMgclY6jbmQ4b0OgG18p6RnNYtJ4wysC6+wEoy5xVljKWRE03UxD3pJbVdk5KPcJ/mnX44tUwU/oE/Ezz7LaMjVXnXns8zKu3LOAIeolcCFVJUbUMQhOuvwrXp+Sag1VV3OG4Uy6P3/0wIajEumzHO4GvpAEJ1F1Ny4b692wP/TdUX/WWAIr\n")])])]),e("p",[t._v('Add the ssh key to the GitHub "'),e("a",{attrs:{href:"https://github.com/ruzickap/k8s-flux-repository",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/ruzickap/k8s-flux-repository"),e("OutboundLink")],1),t._v('"\n-> "Settings" -> "Deploy keys" -> "Add new" -> "Allow write access"')]),t._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/fluxcd/flux/18e5174581f44ed8c9a881dd5071179eed1ebf4d/docs/_files/flux.svg?sanitize=true",alt:"Flux logo",title:"Flux logo"}})]),t._v(" "),e("hr")])}),[],!1,null,null,null);s.default=r.exports}}]);