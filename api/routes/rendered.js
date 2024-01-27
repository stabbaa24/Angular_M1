let Render = require('../model/render');
let Assignment = require('../model/assignment');

//Pour teacher
function getRendersForTeacher(req, res) {
    let assignmentId = req.params.assignmentId;

    Render.find({ assignment: assignmentId }, function (err, renders) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(renders);
        }
    });
};

//Pour student
function getRender(req, res) {
    let assignmentId = req.params.assignmentId;
    let student = req.params.student;

    Render.findOne({ assignment: assignmentId, student: student }, function (err, render) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(render);
        }
    });
};

// Ajouter un devoir rendu
function postRender(req, res) {
    let render = new Render({
        assignment: req.body.assignment,
        student: req.body.student,
        rendu: true,
        note: req.body.note,
        remarques: req.body.remarques
    });

    render.save((err) => {
        if (err) {
            res.status(500).send('Erreur ajout render : ' + err);
            return;
        }

        // Incrémenter le nombre d'assigenment rendu +1
        Assignment.findByIdAndUpdate(req.body.assignment, { $inc: { rendu: 1 } }, (err) => {
            if (err) {
                console.log(err);
                res.status(500).send('Erreur mise à jour assignment : ' + err);
            } else {
                res.status(201).json({ message: 'Devoir rendu enregistré et compteur +1 mis à jour' });
            }
        });
    });
}


module.exports = { getRender, getRendersForTeacher, postRender};