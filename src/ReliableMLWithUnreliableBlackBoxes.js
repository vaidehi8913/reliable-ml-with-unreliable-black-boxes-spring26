import React, { Component } from "react";
import "./ReliableMLWithUnreliableBlackBoxes.css";

import scribeTemplate from "./files/scribe-notes-template.tex";
import scribe1 from "./files/lecture1-scribe.pdf";
import scribe2 from "./files/lecture2-scribe.pdf";
import scribe4 from "./files/lecture4-scribe.pdf";
import scribe5 from "./files/lecture5-scribe.pdf";
import scribe7 from "./files/lecture7-scribe.pdf";
import scribe9 from "./files/lecture9-scribe.pdf";

class ReliableMLWithUnreliableBlackBoxes extends Component {


    render () {

        var courseSchedule = 
            <table >
                <colgroup>
                    <col style={{width: "15%"}}/>
                    <col style={{width: "55%"}}/>
                    <col style={{width: "30%"}}/>
                </colgroup>
                <tbody>
                    <tr key="1">
                        <td>(1) Thu, Apr 2</td>
                        <td>
                            (Lecture) <b>Course Introduction</b>
                            <ul>
                                <li>What is a black box model?</li>
                                <li>What is reliability?</li>
                                <li>Sample topics</li>
                            </ul>
                        </td>
                        <td>
                            <p><a href={scribe1}>[Scribe notes, thanks Eiko Reisz!]</a></p>

                            <p><span class="due">Due 7 days from assigned scribe lecture:</span> Scribe notes, in LaTex 
                            with <a href={scribeTemplate}>this template</a>, to be turned in via email with the raw 
                            LaTeX file.  See below for details.</p>
                        </td>
                    </tr>

                    <tr key="2">
                        <td>(2) Tue, Apr 7</td>
                        <td>
                            (Lecture) <b>Uncertainty Quantification Day 1</b>
                            <ul>
                                <li>Prediction problems</li>
                                <li>Approaches in practice</li>
                                <li>Classical statistical approaches: holdout/calibration sets</li>
                                <li>Quantiles</li>
                                <li>Conformal prediction and exchangeable data</li>
                            </ul>
                        </td>
                        <td>
                            <p><a href={scribe2}>[Scribe notes, thanks Matthew vonAllmen!]</a></p>
                        </td>
                    </tr>

                    <tr key="3">
                        <td>(3) Thu, Apr 9</td>
                        <td>
                            (Lecture) <b>Uncertainty Quantification Day 2</b>
                            <ul>
                                <li>Conformal prediction</li>
                                <li>Exchangeable distributions</li>
                                <li>Split conformal method</li>
                                <li>Full conformal method</li>
                            </ul>
                        </td>
                        <td>
                            <p><span className="scribe">Scribe:</span> Dionysis Arvanitakis</p>
                        </td>
                    </tr>

                    <tr key="4">
                        <td>(4) Tue Apr 14</td>
                        <td>
                            (Lecture) <b>Uncertainty Quantification Day 3</b>
                            <ul>
                                <li>Test for exchangeability</li>
                                <li>Coverage notions for conformal prediction</li>
                                <li>Distributional conformal prediction (DCP)</li>
                                <li>Efficiency (set size)</li>
                            </ul>
                        </td>
                        <td>
                            <p><a href={scribe4}>[Scribe notes, thanks Joe Kook!]</a></p>
                            <p><span class="due">Due by beginning of class:</span> Form due to sign up for 
                            projects/presentations and scribe notes</p>

                            {/* <p><span className="scribe">Scribe:</span> Joe Kook</p> */}
                        </td>
                    </tr>

                    <tr key="5">
                        <td>(5) Thu, Apr 16</td>
                        <td>
                            (Lecture) <b>Uncertainty Quantification Day 4</b>
                            <ul>
                                <li>Efficiency of prediction sets</li>
                                <li>Unsupervised setting</li>
                                <li>Impossibility of volume optimality</li>
                                <li>Finding small confidence/prediction sets</li>
                                <li>VC-dimension and uniform convergence</li>
                                <li>Computational tractability</li>
                            </ul>
                        </td>
                        <td>
                            <p><a href={scribe5}>[Scribe notes, thanks Tanmay Sinha!]</a></p>
                            {/* <p><span className="scribe">Scribe:</span> Tanmay Sinha</p> */}
                        </td>
                    </tr>

                    <tr key="6">
                        <td>(6) Tue Apr 21</td>
                        <td>
                            (Lecture) <b>Uncertainty Quantification Day 5</b>
                            <ul>
                                <li>Goal of CP: distribution-free guarantees</li>
                                <li>Online conformal prediction</li>
                                <li>Interpretation via online convex optimization and pinball loss</li>
                            </ul>
                        </td>
                        <td>
                            <p><span className="scribe">Scribe:</span> Hongyu Chen</p>
                        </td>
                    </tr>

                    <tr key="7">
                        <td>(7) Thu, Apr 23</td>
                        <td>
                            (Student Presentation) <b>UQ Day 6</b>
                            <ul>
                                <li>Joe Kook on <a href="https://arxiv.org/abs/2301.09633">[ABFJZ23]</a> Prediction 
                                powered inference</li>
                                <li>Class discussion on <a href="https://arxiv.org/abs/2502.02561">[KPRH25]</a> Conformal prediction 
                                and risk-aversion</li>
                            </ul>
                        </td>
                        <td>
                            <p><a href={scribe7}>[Scribe notes, thanks Huaman Sun!]</a></p>
                            <p><span className="due">Due:</span> read <a href="https://arxiv.org/abs/2502.02561">[KPRH25]</a> in 
                            prep for discussion</p>
                        </td>
                    </tr>

                    <tr key="8">
                        <td>(8) Tue Apr 28</td>
                        <td>
                            (Lecture) <b>Algorithms with Predictions Day 1</b>
                            <ul>
                                <li>Shifting focus: task-dependent strategies for mitigating unreliable predictions</li>
                                <li>Motivating example: binary search with predictions</li>
                                <li>The algorithms with predictions paradigm: robustness, consistency, and graceful degradation</li>
                                <li>Caching with machine learned predictions (marking with predictions algorithm)</li>
                            </ul>
                        </td>
                        <td><span className="scribe">Scribe:</span> Bob Guo</td>
                    </tr>

                    <tr key="9">
                        <td>(9) Thu, Apr 30</td>
                        <td>
                            (Lecture) <b>Algorithms with Predictions Day 2</b>
                            <ul>
                                <li>Example algorithmic templates for algorithms with predictions: switching, local search, biased randomness</li>
                                <li>Optimistic online learning</li>
                            </ul>
                        </td>
                        <td><a href={scribe9}>[Scribe notes, thanks Aryaman Chawla!]</a></td>
                    </tr>

                    <tr key="10">
                        <td>(10) Tue, May 5</td>
                        <td>
                            (Student Presentations) <b>Algorithms with Predictions and UQ Day 3</b>
                            <ul>
                                <li>Xingchen Sha on <a href="https://arxiv.org/abs/2503.07453">[FMR25]</a> Reinforcement learning with a good base model</li>
                                <li>Class discussion on <a href="https://arxiv.org/abs/2011.14999">[BGM23]</a> "An Authomatic Finite-Sample Robustness Metric"</li>
                            </ul>
                        </td>
                        <td>
                            <p><span className="due">Due:</span> read <a href="https://arxiv.org/abs/2011.14999">[BGM23]</a> in 
                            prep for discussion</p>
                            <p><span className="scribe">Scribe:</span> Monish Vijayakumar (presentation), Prakeerth Prasad (discussion)</p>
                        </td>
                    </tr>

                    <tr key="11">
                        <td>(11) Thu, May 7</td>
                        <td>
                            (Student Presentations) <b>Algorithms with Predictions Day 4</b>
                            <ul>
                                <li>Dionysis Arvanitakis on <a href="https://arxiv.org/abs/2312.07535">[ACNSV23]</a> frequency
                                estimation in streams, with predictions</li>
                                <li>Class discussion on <a href="https://arxiv.org/abs/2402.18263">[COGLP24]</a> Max-Cut with predictions</li>
                            </ul>
                        </td>
                        <td>
                            <p><span className="due">Due:</span> read <a href="https://arxiv.org/abs/2402.18263">[COGLP24]</a> in 
                            prep for discussion (see also <a href="https://arxiv.org/abs/2403.02212">[GMM24]</a> if 
                            you are interested, but we don't expect you to read both)</p>
                            <p><span className="scribe">Scribe:</span> Andre Shportko</p>
                        </td>
                    </tr>

                    <tr key="12">
                        <td>(12) Tue, May 12</td>
                        <td>(Lecture) <b>Reliability Under Distribution Shift</b></td>
                        <td>
                            <p><span className="due">Due:</span> project proposals</p>
                            <p><span className="scribe">Scribe:</span> Yunai Li</p>
                        </td>
                    </tr>

                    <tr key="13">
                        <td>(13) Thu, May 14</td>
                        <td>(Lecture) <b>Causal Inference and Robustness</b></td>
                        <td><p><span className="scribe">Scribe:</span> Xingchen Sha</p></td>
                    </tr>

                    <tr key="14">
                        <td>(14) Tue, May 19</td>
                        <td>
                            (Student Presentations) <b>Distribution Shift and Robustness Day 3</b>
                            <ul>
                                <li>Monish Vijayakumar on <a href="https://arxiv.org/abs/1810.08750">[DN20]</a> Distributionally 
                                robust optimization</li>
                                <li>Huaman Sun on <a href="https://arxiv.org/abs/2007.05145">[GKKM20]</a> Prediction with abstentions</li>
                            </ul>
                        </td>
                        <td><p><span className="scribe">Scribe:</span> April Shi (presentation 1), Yu He (presentation 2)</p></td>
                    </tr>

                    <tr key="15">
                        <td>(15) Thu, May 21</td>
                        <td>
                            (Student presentations) <b>Distribution Shift and Robustness Day 4</b>
                            <ul>
                                <li>Nathan Reimer on <a href="https://arxiv.org/abs/2201.04234">[GBLNS22]</a> Predicting 
                                out-of-distribution performance</li>
                                <li>Bob Guo on <a href="https://arxiv.org/abs/2103.03757">[MDMV22]</a> 
                                <a href="https://arxiv.org/abs/2106.02968">[MFL23]</a> Mitigating distribution shift via 
                                reweighting and discrepancy minimization</li>
                            </ul>
                        </td>
                        <td><p><span className="scribe">Scribe:</span> Baenan McKeown (presentation 1), Noah Schulhof (presentation 2)</p></td>
                    </tr>

                    <tr key="16">
                        <td>(16) Tue, May 26</td>
                        <td>(Lecture) <b>Calibration</b></td>
                        <td><p><span className="scribe">Scribe:</span> Mateusz Gabrys</p></td>
                    </tr>

                    <tr key="17">
                        <td>(17) Thu, May 28</td>
                        <td>(Lecture) <b>Other Topics</b></td>
                        <td><p><span className="scribe">Scribe:</span> Nathan Reimer</p></td>
                    </tr>

                    <tr key="18">
                        <td>(18) Tue, Jun 2</td>
                        <td>
                            (Student Presentations) <b>Other Topics</b>
                            <ul>
                                <li>Tanmay Sinha on <a href="https://arxiv.org/abs/2411.07536">[LM24]</a> Model stealing</li>
                                <li>Mateusz Gabrys on <a href="https://arxiv.org/abs/2306.09194">[CGZ23]</a> Undetectable watermarks for large language models</li>
                            </ul>
                        </td>
                        <td><p><span className="scribe">Scribe:</span> Sarnabh Mukhopadhyay (presentation 1), Matthew Khoriaty (presentation 2)</p></td>
                    </tr>

                    <tr key="19">
                        <td>(19) Thu, Jun 4</td>
                        <td>(Student Presentations) <b>Projects</b></td>
                        <td><p><span className="scribe">Scribe:</span> Xinye Yang (first n/2 presentations), Ruitao Zhou (second n/2 presentations)</p></td>
                    </tr>

                    <tr key="20">
                        <td>Thu, Jun 9</td>
                        <td>(Finals week, no class)</td>
                        <td><p><span className="due">Due:</span> Project/presentation writeups</p></td>
                    </tr>
                </tbody>
            </table>;



        return (
            <div className="background-box"> 
            <div className="inner-wrapper">
                
                <div className="header">
                    <h1>Reliable Machine Learning with Unreliable Black Box Models</h1>
                    <h3>Spring 2026 course at Northwestern University</h3>
                    <h3>Meets: Tu/Thu 9:30-10:50am, Tech A110</h3>
                    <h3>Instructors: <a href="https://vaidehi8913.github.io/">Vaidehi Srinivas</a> and <a href="https://users.cs.northwestern.edu/~aravindv/">Aravindan Vijayaraghavan</a> </h3>
                    <h3>Aravindan Office Hours: Mondays 3:15-4:00pm, Mudd 3011, Vaidehi Office Hours: by appointment</h3>
                </div>

                <div className="info-block">
                    <h2>Description</h2>

                    <p>
                        Modern machine learning methods have made huge strides in recent years, in many domains.  
                        Even so, reliability of modern models remains poorly understood.  Models often suffer 
                        from biases, overconfidence, and can fail unpredictably on new unseen data.  As these 
                        models are increasingly used in high-stakes domains such as medicine, policy, self-driving 
                        technology and scientific discovery, establishing principled foundations of when and how 
                        to trust the predictions of these models has become a pressing concern.  Theory offers a 
                        unique foothold for understanding reliability by providing formal guarantees.  However, our 
                        current state of understanding of deep learning and other practical methods is far from being 
                        able to inform us when and why ML models fail, and how to foresee and avoid these failures. 
                    </p>

                    <p>
                        This course will cover new approaches towards statistical and computational foundations for 
                        the reliable use of powerful but opaque modern machine learning models, by treating such models 
                        as black boxes that may be unreliable or trained on mismatched data. 
                    </p>

                    <p>
                        Specific topics include Uncertainty Quantification including approaches like Conformal 
                        Prediction, Algorithms with Predictions and Data-Driven Algorithms, Reliability under 
                        Distribution Shift, Failure of Distributional Assumptions, and connections to Robust Statistics, 
                        and Calibration.
                    </p>
                </div>
                
                <div className="info-block">

                    <h2>Schedule</h2>

                    {courseSchedule}
                </div>

                <div className="info-block">

                    <h2>Assignment Details</h2>

                    <h3>Track 1: Paper Presentation</h3>

                    <p>The paper presentation will be done <b>solo</b>.</p>

                    <h4>Responsibilities</h4>
                    <ol>
                        <li>Practice presentation with course instructors in the week before your allotted presentation 
                            slot (you are responsible for coordinating with us and setting this up.)
                        </li>
                        <li>~40min presentation in class that covers the problem formulation and core technical ideas 
                            of the paper you are assigned.</li>
                        <li>1 page mini-project writeup that outlines an interesting research question for further 
                            investigation, due at the end of the term.  This does not necessarily have to be related to 
                            the paper you present, it could be inspired by any of the topics that we cover in the class. </li>
                        <li>Scribe notes: Day for notes will be assigned, please use <a href={scribeTemplate}>this template</a>.  
                        Raw LaTeX file(s) due to us by email 7 days from the lecture that you scribe. If you have never used 
                        LaTeX before, please see <a href="https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes">this 
                        tutorial</a>.</li>
                    </ol>

                    <div className="paper-list">
                    <h4>Paper options by topic</h4>
                    
                    <p>For some topics we have included multiple resources.  The goal is not to present all of all of the 
                    papers, but to pick and choose what is the right subset of topics to present.</p>

                    <p><u>Uncertainty Quantification</u></p>
                    <ul>
                        <li><a href="https://arxiv.org/abs/2301.09633">[ABFJZ23]</a> Prediction-powered inference </li>
                        <li><a href="https://arxiv.org/abs/2502.02561">[KPRH25]</a> Conformal prediction and risk-Aversion</li>
                        <li><a href="https://arxiv.org/abs/2504.02723">[GSSV25]</a><a href="https://arxiv.org/abs/2512.16875">[GSSV26]</a> Volume 
                        optimality in conformal prediction</li>
                        <li><a href="https://arxiv.org/abs/2507.02496">[S26]</a> Volume optimality in online conformal prediction</li>
                        <li><a href="https://arxiv.org/abs/2011.14999">[BGM23]</a> Robustness to dropping data</li>
                    </ul>

                    <p><u>Algorithms with Predictions</u></p>
                    <ul>
                        <li><a href="https://arxiv.org/abs/2312.07535">[ACNSV23]</a> Frequency estimation in streams, with 
                        predictions</li>
                        <li><a href="https://arxiv.org/abs/2405.03661">[BS25]</a> Competitive strategies to learn predictions</li>
                        <li><a href="https://arxiv.org/abs/2011.07177">[Bal20]</a> Data-driven algorithm design</li>
                        <li><a href="https://arxiv.org/abs/2503.07453">[FMR25]</a> Reinforcement learning with a good base model</li>
                    </ul>
                    
                    <p><u>Causal Inference and Robustness</u></p>
                    <ul>
                        <li><a href="https://arxiv.org/abs/2201.04234">[GBLNS22]</a> Predicting out-of-distribution performance</li>
                        <li><a href="https://arxiv.org/abs/2103.03757">[MDMV22]</a> Discrepancy-based active learning for domain adaptation</li>
                        <li><a href="https://arxiv.org/abs/2106.02968">[MFL23]</a> Reweighting for distribution shift via Wasserstein distance 
                        minimization</li>
                        <li><a href="https://arxiv.org/abs/2311.15142">[KSV24]</a> Testable learning with distribution shift</li>
                        <li><a href="https://arxiv.org/abs/1810.08750">[DN20]</a> Distributionally robust optimization</li>
                    </ul>

                    <p><u>Other topics</u></p>
                    <ul>
                        <li><a href="https://arxiv.org/abs/2412.18808">[AGGPW24]</a> Measuring aleatoric vs epistemic 
                        uncertainty</li>
                        <li><a href="https://arxiv.org/abs/2504.09096">[Pen25]</a><a href="https://arxiv.org/abs/2505.21460">[FGMS25]</a> High-dimensional calibration</li>
                        <li><a href="https://arxiv.org/abs/2504.08377">[BHPS25]</a> Certificates of reliable predictions</li>
                        <li><a href="https://arxiv.org/abs/2306.09194">[CGZ23]</a> Undetectable watermarks for large language models</li>
                        <li><a href="https://arxiv.org/abs/2007.05145">[GKKM20]</a> Prediction with abstentions</li>
                        <li><a href="https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.ITCS.2021.41">[GRSY21]</a> Interactive proofs for verifying machine learning</li>
                        <li><a href="https://arxiv.org/abs/2411.07536">[LM24]</a> Model stealing</li>
                    </ul>

                    <p>If there is a paper not listed above that you think is a good fit for the course, you are welcome to 
                        pitch it to us.  We reserve the right to veto.  In particular, we would like the presentations to 
                        be <b>theory-focused</b>, and directly relevant to the topics of the course.  If you are interested in a more 
                        tangential direction, the project track may be better.  </p>
                    </div>



                    <h3>Track 2: Project</h3>

                    <p>The project can be <b>solo or in pairs</b>.  Please check in with us if you want to work in a 
                        larger group than that.  </p>

                    <h4>Responsibilities</h4>
                    <ol>
                        <li>1 page project proposal outlining the research question that you are interested in 
                            investigating, and referencing any related work. </li>
                        <li>3 page project write-up outlining the preliminary steps you have taken towards 
                            addressing the research question.  Examples include proofs of partial results, or 
                            preliminary experiments on real or synthetic data.</li>
                        <li>~10 minute class presentation. </li>
                        <li>Scribe notes: Day for notes will be assigned, please use <a href={scribeTemplate}>this template</a>.  
                        Raw LaTeX file(s) due to us by email 7 days from the lecture that you scribe. If you have never used 
                        LaTeX before, please see <a href="https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes">this 
                        tutorial</a>.</li>
                    </ol>

                    <div className="paper-list">
                    <h4>References</h4>

                    <p>In addition to the topics that we will see in class and the list of potential presentation topics above,
                        here are some references that may help inspire project ideas.</p>

                    <p><u>Uncertainty Quantification</u></p>
                    <ul>
                        <li><a href="https://arxiv.org/abs/2503.00220">[Duc25]</a> Sample-conditional coverage in conformal prediction</li>
                        <li><a href="https://arxiv.org/abs/2506.20173">[HAJD25]</a> Valid selection among conformal sets</li>
                        <li><a href="https://arxiv.org/abs/2602.17633">[KNPS26]</a> Verfiying model outputs using weak and strong checks</li>
                        <li><a href="https://arxiv.org/abs/2411.11824">[ABB26]</a> Very up to date book on the theoretical foundations of 
                        conformal prediction</li>
                    </ul>

                    <p><u>Algorithms with Predictions</u></p>
                    <ul>
                        <li><a href="https://arxiv.org/abs/2602.24232">[VSPSIJLS26]</a> Spanning Trees</li>
                        <li><a href="https://arxiv.org/abs/2603.02488">[NPWWZ26]</a> Moment estimation in streams</li>
                        <li><a href="https://arxiv.org/abs/2510.03917">[RXZ25]</a> Online regression</li>
                        <li><a href="https://arxiv.org/abs/2403.02212">[GMM24]</a><a href="https://arxiv.org/abs/2402.18263">[COGLP24]</a> Max-cut and other CSPs</li>
                        <li><a href="https://arxiv.org/abs/2010.11632">[BMS20]</a> Online primal-dual method</li>
                        <li><a href="https://arxiv.org/abs/2006.09123">[MV20]</a> Book chapter on algorithms with predictions (from Beyond the Worst 
                        Case Analysis of Algorithms)</li>
                        <li><a href="https://algorithms-with-predictions.github.io/">This running bibliography</a> of papers in this area</li>
                    </ul>

                    <p><u>Causal Inference and Robustness</u></p>
                    <ul>
                        <li><a href="https://simons.berkeley.edu/workshops/domain-adaptation-related-areas/schedule#simons-tabs">Simons 
                        workshop on domain adaptation</a></li>
                        <li><a href="https://arxiv.org/abs/1904.06019">[TBCR20]</a> Conformal prediction under covariate shift</li>
                    </ul>

                    </div>


                </div>
                
            </div>
            </div>
        )
    }

}


export default ReliableMLWithUnreliableBlackBoxes; 