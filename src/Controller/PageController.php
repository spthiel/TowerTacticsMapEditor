<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class PageController extends AbstractController
{

    #[Route('/', name: "mapEditor")]
    public function mapEditor() {

        return $this->render("templates/page/mapEditor.html.twig");
    }

}