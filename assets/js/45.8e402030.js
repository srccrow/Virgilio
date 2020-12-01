(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{402:function(e,t,r){"use strict";r.r(t);var a=r(42),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"index"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[e._v("#")]),e._v(" Index")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#There-Is-No-One-Ring-to-Rule-them-All"}},[e._v("There Is No One Ring to Rule them All")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Be-Sure-About-the-Type-of-the-Problem"}},[e._v("Be Sure About the Type of the Problem")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Build-a-Meaningful-Test-Set"}},[e._v("Build a Meaningful Test Set")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Select-a-Metric"}},[e._v("Select a Metric")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Evaluate-the-Model"}},[e._v("Evaluate the Model")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Hyperparameters-Tuning"}},[e._v("Hyperparameters Tuning")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Conclusions"}},[e._v("Conclusions")])])]),e._v(" "),r("h2",{attrs:{id:"there-is-no-one-ring-to-rule-them-all"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#there-is-no-one-ring-to-rule-them-all"}},[e._v("#")]),e._v(" There Is No One Ring to Rule them All")]),e._v(" "),r("p",[e._v('In many of Virgilio\'s guides, you have learned that there is rarely a "best" way to do something, as is common in all engineering disciplines.')]),e._v(" "),r("p",[e._v("Data Science doesn't make any difference, on the contrary, it takes to the extreme the concept of "),r("strong",[e._v("tradeoff")]),e._v(', of "choice" in front of various possibilities, with the best choice often guided by the details of the specific problem.')]),e._v(" "),r("p",[e._v("This concept is well illustrated by the "),r("a",{attrs:{href:"http://www.no-free-lunch.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v('"No Free Lunch Theorem"'),r("OutboundLink")],1),e._v(", which states")]),e._v(" "),r("blockquote",[r("p",[e._v("All algorithms that search for an extremum of a cost function perform the same when averaged over all possible cost functions.")])]),e._v(" "),r("p",[e._v("That is, in human-understandable words, that there's "),r("strong",[e._v("no one model that can fit every need or solve every problem")]),e._v(".")]),e._v(" "),r("p",[e._v("See also: "),r("a",{attrs:{href:"https://ai.stackexchange.com/questions/15650/what-are-the-implications-of-the-no-free-lunch-theorem-for-machine-learning",target:"_blank",rel:"noopener noreferrer"}},[e._v("What are the implications of the “No Free Lunch” theorem for machine learning?"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("Sure, there are "),r("em",[e._v("certain classes")]),e._v(" of algorithms that work better for "),r("em",[e._v("certain classes of problems")]),e._v(', or algorithms that have been completely outclassed by more "intelligent" versions, but in general, it is not possible to state this with certainty for every problem.')]),e._v(" "),r("p",[e._v("The bottom line is that you must learn how to choose the right algorithm that will give you the best-trained model "),r("em",[e._v("for your specific problem")]),e._v(".")]),e._v(" "),r("p",[e._v("How to do this?")]),e._v(" "),r("p",[e._v("Well, in this case, the experience plays the master role, and even after years of doing Data Science, you'll find yourself learning new stuff about how an algorithm can perform better or worse given certain conditions.")]),e._v(" "),r("p",[e._v("But luckily you can measure algorithm performance on our problem and discover what works best!")]),e._v(" "),r("p",[e._v("To do that, you need to do 3 things:")]),e._v(" "),r("ul",[r("li",[e._v("Build a meaningful test set")]),e._v(" "),r("li",[e._v("Choose the right metric to measure your model performances against it")]),e._v(" "),r("li",[e._v("Track the parameters and the associated results with each evaluation")])]),e._v(" "),r("h2",{attrs:{id:"be-sure-about-the-type-of-problem"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#be-sure-about-the-type-of-problem"}},[e._v("#")]),e._v(" Be sure about the type of problem")]),e._v(" "),r("p",[e._v("It would be impossible to list all the existing types and sub-types of problems, also because some of them can be classified as classification or regression problems depending on the approach!")]),e._v(" "),r("p",[e._v("The advice that Virgilio gives you is, therefore, the following:")]),e._v(" "),r("p",[e._v("Once you are in front of a problem, understand first "),r("strong",[e._v("what type")]),e._v(" problem you are facing, and "),r("em",[e._v("from that")]),e._v(" start to learn, search and understand the metrics that may interest you!")]),e._v(" "),r("p",[e._v("Be sure to know what problem you're dealing with, even though you should have done this "),r("em",[e._v("before start solving the problem")]),e._v(":")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://developers.google.com/machine-learning/problem-framing/cases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Common ML Problems"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"build-a-meaningful-test-set"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#build-a-meaningful-test-set"}},[e._v("#")]),e._v(" Build a Meaningful Test Set")]),e._v(" "),r("p",[e._v('To evaluate your model, you should have a clear picture of what kind of "real-world" it will behave in, which means having a test set representative of the actual problem you want to solve.')]),e._v(" "),r("p",[e._v("Often, if you pick a pre-built dataset, it comes with a ready-to-go test set, but in real problem scenarios, you don't have that!")]),e._v(" "),r("p",[e._v("A technique to generate a test set from a dataset is to "),r("a",{attrs:{href:"https://stackoverflow.com/questions/37114273/how-to-randomly-split-a-dataset-into-training-set-test-set-and-dev-set-in-pyth",target:"_blank",rel:"noopener noreferrer"}},[e._v("shuffle and randomly draw a set"),r("OutboundLink")],1),e._v(" from it, and this "),r("em",[e._v("can work")]),e._v(" for certain situations, but it's not a general rule. This approach assumes that your dataset is balanced, is representative of the real-world problem, and some other details.")]),e._v(" "),r("p",[e._v("In general, when you build a test set you should make it:")]),e._v(" "),r("ul",[r("li",[e._v("Big enough to draw conclusions about the performance of the model")]),e._v(" "),r("li",[e._v("Representative of the real-world scenario in which the model will be deployed")]),e._v(" "),r("li",[e._v("Representative of the training set (if not, for sure you won't get good performances)")]),e._v(" "),r("li",[e._v("It needs to avoid biases introduced by pre-processing transformations or outlier removal")])]),e._v(" "),r("p",[e._v("Luckily for us, "),r("a",{attrs:{href:"https://it.wikipedia.org/wiki/Andrew_Ng",target:"_blank",rel:"noopener noreferrer"}},[e._v("Andrew NG"),r("OutboundLink")],1),e._v(" collected for us all a very exhaustive list of tips and trick to build a meaningful test set, and you can find them in the practical book:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.deeplearning.ai/machine-learning-yearning/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Machine Learning Yearning"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"select-a-metric"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#select-a-metric"}},[e._v("#")]),e._v(" Select a Metric")]),e._v(" "),r("p",[e._v("You know, Google is your friend, and with a 99.99% chance someone will already be in the same situation as you, and probably a simple query like 'ML metric for "),r("strong",[e._v("type_X")]),e._v(" problem' can give you a ton of good answers.")]),e._v(" "),r("p",[e._v("A good starting point though can be the following:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://fayrix.com/machine-learning-metrics",target:"_blank",rel:"noopener noreferrer"}},[e._v("Selecting Metrics for Machine Learning"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("Even if you can easily find in a lot of literature and good information about each ML metric on Google, be sure to read this presentation about the ML evaluation phase in general:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.icmla-conference.org/icmla11/PE_Tutorial.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Performance Evaluation for Learning Algorithms"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("Then you can dive deeper into these more detailed resources:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://frnsys.com/ai_notes/machine_learning/model_selection.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Model Selection and Evaluation"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://arxiv.org/abs/1809.03006",target:"_blank",rel:"noopener noreferrer"}},[e._v("Performance Metrics (Error Measures) in Machine Learning Regression"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("Bonus resources about model evaluation:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.youtube.com/watch?v=7RdKnACscjA&t=2374s",target:"_blank",rel:"noopener noreferrer"}},[e._v("Practical Model Evaluation: What matters for your model?"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.youtube.com/watch?v=trg3YkCsjqE",target:"_blank",rel:"noopener noreferrer"}},[e._v("Applied ML 2020 - Model Evaluation and Metrics"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("Check this library for testing machine learning models, specifically those in scikit-learn:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/EricSchles/drifter_ml",target:"_blank",rel:"noopener noreferrer"}},[e._v("Drifter_ML"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"evaluate-the-model"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#evaluate-the-model"}},[e._v("#")]),e._v(" Evaluate the Model")]),e._v(" "),r("p",[e._v("After you've built your test set, is time to evaluate your trained algorithm against it!")]),e._v(" "),r("p",[e._v("But to do that, you should have well clear in mind which is a valuable metric to measure the performance of your algorithms.")]),e._v(" "),r("p",[e._v("It turns out that this heavily depends on the problem you are facing, and in particular the type of problem: are you facing a supervised problem or not? If yes, are you solving a classification or regression problem?")]),e._v(" "),r("p",[e._v("And so on...")]),e._v(" "),r("p",[e._v("To learn how to evaluate your model after the training phase, get through Chapter 6 of the book "),r("a",{attrs:{href:"http://www.mlebook.com/wiki/doku.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("Machine Learning Engineering"),r("OutboundLink")],1),e._v(" by "),r("a",{attrs:{href:"https://www.linkedin.com/in/andriyburkov/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Andriy Burkov"),r("OutboundLink")],1),e._v(":")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.dropbox.com/s/4ly72ahtz6vsy5n/Chapter6.pdf?dl=0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chapter 6 - Model Evaluation"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"hyperparameters-tuning"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hyperparameters-tuning"}},[e._v("#")]),e._v(" Hyperparameters Tuning")]),e._v(" "),r("p",[e._v("When you evaluate a Machine Learning model, you evaluate a model trained with a certain configuration, and the parameters in this configuration are called "),r("strong",[e._v('"hyperparameters"')]),e._v(".")]),e._v(" "),r("p",[e._v("See also: "),r("a",{attrs:{href:"https://datascience.stackexchange.com/questions/14187/what-is-the-difference-between-model-hyperparameters-and-model-parameters",target:"_blank",rel:"noopener noreferrer"}},[e._v("What is the difference between model hyperparameters and model parameters?"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v('**Choosing the right hyperparameters to let the ML algorithm learn well is probably the most difficult job in the Data Science Process (someone calls it "'),r("a",{attrs:{href:"https://medium.com/@rayheberer/black-magic-and-hyperparameter-tuning-ef875eb31712",target:"_blank",rel:"noopener noreferrer"}},[e._v("Black Magic"),r("OutboundLink")],1),e._v('").')]),e._v(" "),r("p",[e._v("There are no Golden Rules ("),r("a",{attrs:{href:"#There-Is-No-One-Ring-to-Rule-them-All"}},[e._v("There Is No One Ring to Rule them All")]),e._v("), even though some best practices are recognized to work well in a variety of situations.")]),e._v(" "),r("p",[e._v("But when you tackle a novel problem, with a custom dataset, it's difficult to choose these hyperparameters right at the first shot.")]),e._v(" "),r("p",[e._v("For example, imagine you're training a neural network (even a simple one), you can have "),r("em",[e._v("a lot")]),e._v(" of these hyperparameters:\nAbout the topology of the network:")]),e._v(" "),r("ul",[r("li",[e._v("the type of layers")]),e._v(" "),r("li",[e._v("the number of layers")]),e._v(" "),r("li",[e._v("the number of neurons in each layer")]),e._v(" "),r("li",[e._v("the activation functions")])]),e._v(" "),r("p",[e._v("Or about the optimization phase (the actual training):")]),e._v(" "),r("ul",[r("li",[e._v("the number of training epochs")]),e._v(" "),r("li",[e._v("the batch size")]),e._v(" "),r("li",[e._v("the learning rate")]),e._v(" "),r("li",[e._v("the learning rate decay")]),e._v(" "),r("li",[e._v("regularization techniques")])]),e._v(" "),r("p",[e._v("What a mess! How to get these right?")]),e._v(" "),r("p",[e._v("Often data scientists try to overcome this problem with some techniques, like Grid Search, Random Search, or Evolutionary Algorithms.")]),e._v(" "),r("p",[e._v("Be sure to get through the following resources to understand how to tune the hyperparameters of your model!")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://community.alteryx.com/t5/Data-Science-Blog/Hyperparameter-Tuning-Black-Magic/ba-p/449289",target:"_blank",rel:"noopener noreferrer"}},[e._v("Introduction to Hyperparameter Tuning"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://machinelearningmastery.com/grid-search-hyperparameters-deep-learning-models-python-keras/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Grid Search"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://towardsdatascience.com/feature-selection-by-random-search-in-python-730ffd2912e9",target:"_blank",rel:"noopener noreferrer"}},[e._v("Random Search"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://scikit-learn.org/stable/modules/cross_validation.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cross-validation: evaluating estimator performance - with Scikit-Learn"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("Read also:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://stats.stackexchange.com/questions/160479/practical-hyperparameter-optimization-random-vs-grid-search",target:"_blank",rel:"noopener noreferrer"}},[e._v("Practical hyperparameter optimization: Random vs. grid search"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.floydhub.com/guide-to-hyperparameters-search-for-deep-learning-models/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Practical Guide to Hyperparameters Optimization for Deep Learning Models"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.tensorflow.org/2020/01/hyperparameter-tuning-with-keras-tuner.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hyperparameter tuning with Keras Tuner"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("And more advanced techniques:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://arxiv.org/abs/1906.11527",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hyp-RL : Hyperparameter Optimization by Reinforcement Learning"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("Remember that these techniques are not meant to substitute the Data Scientist knowledge, but to help him in finding the most promising directions!")]),e._v(" "),r("p",[e._v("With the experience, you'll learn by yourself what are likely good configurations, depending on the problem at hand.")]),e._v(" "),r("p",[e._v("Even though Hyperparameter Tuning can help, remember that can sometimes give a small/marginal gain over the original metric.")]),e._v(" "),r("p",[e._v("The real factors resulting in better metrics/results is always the quality of the dataset.")]),e._v(" "),r("h2",{attrs:{id:"conclusions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conclusions"}},[e._v("#")]),e._v(" Conclusions")]),e._v(" "),r("p",[e._v("In this guide, you've learned how to choose the right test set for your evaluation, how to choose a meaningful metric for the problem at hand, and how to evaluate the model against it.")]),e._v(" "),r("p",[e._v("You've also seen some techniques that help you move in the deep space of the hyperparameters configurations.")]),e._v(" "),r("p",[e._v("Now, once you're satisfied by the performance fo your model, you're ready to use it in the real world!")])])}),[],!1,null,null,null);t.default=o.exports}}]);