import express from "express";
const router = express.Router();

import {
    createJob,
    getAllJobs,
    deleteJob,
    updateJob,
    showStats
} from '../controllers/jobsControllers.js'

router.route('/').post(createJob).get(getAllJobs)
//remeber about :id
router.route('/stats').get(showStats)
router.route('/:id').delete(deleteJob).patch(updateJob)

export default router;


