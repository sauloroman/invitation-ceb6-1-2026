import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/common/components/button/Button'

import bg from '@/assets/images/backgrounds/rsvp.jpeg'
import { ArrowUpRightIcon } from '@phosphor-icons/react'
import logo from '@/assets/images/icons/logo.svg'
import { useDrawer } from '@/common/hooks'
import { DRAWER_NAMES } from '@/store/ui/drawer.slice'

const FLUID_EASE = [0.22, 1, 0.36, 1] as const

export const GraduatesSection: React.FC = () => {
    const { onOpenDrawer } = useDrawer()
    return (
        <section id="graduates" className="graduates">
            <div className="graduates__container">
                <motion.div
                    className="graduates__card"
                    style={{ backgroundImage: `url(${bg})` }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ duration: 1.2, ease: FLUID_EASE }}
                >
                    <div className="graduates__content">
                        <div className="graduates__logo-container">
                            <img src={logo} alt="CEB 6/1 Logo" className="graduates__logo" />
                        </div>

                        <p className="graduates__sub-message">
                            Con orgullo y gratitud de nuestra institución
                        </p>

                        <div className="graduates__columns">
                            <div className="graduates__col">
                                <p className="graduates__col-label">Centro de Estudios</p>
                                <p className="graduates__col-value">de Bachillerato 6/1</p>
                            </div>
                            <div className="graduates__col-divider" />
                            <div className="graduates__col">
                                <p className="graduates__col-label">Generación</p>
                                <p className="graduates__col-value">2023 - 2026</p>
                            </div>
                        </div>

                        <div className="graduates__careers-list">
                            <div className="graduates__career-item">
                                <h4 className="graduates__career-name">Tecnologías de la Información y Comunicación</h4>
                                <Button
                                    icon={<ArrowUpRightIcon size={22} />}
                                    variant="outline"
                                    className="graduates__button"
                                    onClick={() => onOpenDrawer(DRAWER_NAMES.tics, 'Tecnologías de la Información y Comunicación')}
                                >
                                    Ver graduados
                                </Button>
                            </div>

                            <div className="graduates__career-item">
                                <div className="graduates__career-divider" />
                                <h4 className="graduates__career-name">Administración</h4>
                                <Button
                                    icon={<ArrowUpRightIcon size={22} />}
                                    variant="outline"
                                    className="graduates__button"
                                    onClick={() => onOpenDrawer(DRAWER_NAMES.administracion, 'Administración')}
                                >
                                    Ver graduados
                                </Button>
                            </div>

                            <div className="graduates__career-item">
                                <div className="graduates__career-divider" />
                                <h4 className="graduates__career-name">Intervención en la Educación Obligatoria</h4>
                                <Button
                                    icon={<ArrowUpRightIcon size={22} />}
                                    variant="outline"
                                    className="graduates__button"
                                    onClick={() => onOpenDrawer(DRAWER_NAMES.intervencion, 'Intervención en la Educación Obligatoria')}
                                >
                                    Ver graduados
                                </Button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

